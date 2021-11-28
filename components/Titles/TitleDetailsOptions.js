import React, { useContext, useEffect, useState } from "react";
import { Popover, OverlayTrigger, Button, Spinner } from "react-bootstrap";
import Link from "next/link";
import api from "../../utils/frontend/api";
import { Context as AuthContext } from "../../contexts/AuthContext";
import styles from "../../styles/TitleDetails.module.css";

const TitleDetailsOptions = ({ titleId }) => {
	const { state } = useContext(AuthContext);
	const [inWatchlist, setInWatchlist] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const checkWatchlist = async () => {
			setLoading(true);
			const res = await api.get(`/api/users/checkwatchlist`, {
				params: { titleId },
			});
			const { inWatchlist } = res.data;
			setInWatchlist(inWatchlist);
			setLoading(false);
		};
		checkWatchlist();
	}, [inWatchlist, titleId]);

	const toggleWatchlist = async () => {
		setLoading(true);
		let res;
		if (inWatchlist) {
			res = await api.put(`/api/users/watchlist`, {
				titleId,
				operation: "remove",
			});
		} else {
			res = await api.put(`/api/users/watchlist`, {
				titleId,
				operation: "add",
			});
		}
		setInWatchlist(res.data.inWatchlist);
		setLoading(false);
	};

	return state.user ? (
		<OverlayTrigger
			trigger="click"
			placement="bottom"
			overlay={
				<Popover id="popover-basic">
					<Popover.Header as="h3">Options</Popover.Header>
					<Popover.Body>
						<ul className={styles.optionsList}>
							{state.user.isAdmin && (
								<li className={styles.option}>
									<Link href={`/titles/edit/${titleId}`}>
										<a className={styles.optionLink}>
											<i className="fa fa-edit mx-1"></i>
											Edit
										</a>
									</Link>
								</li>
							)}

							<li className={styles.option}>
								<Link href={`/titles/${titleId}/#reviews`}>
									<a className={styles.optionLink}>
										<i className="fa fa-eye mx-1"></i>
										View Reviews
									</a>
								</Link>
							</li>
							<li className={styles.option}>
								<Link href={`/reviews/write/${titleId}`}>
									<a className={styles.optionLink}>
										<i className="fa fa-pencil mx-1"></i>Write Review
									</a>
								</Link>
							</li>
							<hr />
							<li className={styles.option}>
								{loading ? (
									<div className="text-center">
										<Spinner animation="border" variant="primary" />
									</div>
								) : (
									<>
										{inWatchlist ? (
											<Button
												size="sm"
												variant="secondary"
												onClick={toggleWatchlist}
											>
												<i className="fa fa-check mx-1"></i>Watchlist
											</Button>
										) : (
											<Button
												size="sm"
												variant="success"
												onClick={toggleWatchlist}
											>
												<i className="fa fa-plus mx-1"></i>Watchlist
											</Button>
										)}
									</>
								)}
							</li>
						</ul>
					</Popover.Body>
				</Popover>
			}
		>
			<div className={styles.optionsBtn}>
				<i className="fa fa-caret-square-o-down" aria-hidden="true"></i>{" "}
			</div>
		</OverlayTrigger>
	) : (
		<></>
	);
};

export default TitleDetailsOptions;