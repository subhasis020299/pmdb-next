import React from "react";
import { Row, Col, Accordion, Container } from "react-bootstrap";
import Lottie from "lottie-react";
import movieTheatreLottie from "../../public/lotties/movie-theatre.json";
import styles from "../../styles/Home.module.css";

const About = () => {
	return (
		<Container fluid>
			<Row className={styles.about}>
				<Col className={styles.aboutLottieContainer}>
					<Lottie
						animationData={movieTheatreLottie}
						className={styles.aboutLottie}
					/>
				</Col>
				<Col className="text-center">
					<h3 className="my-4 text-center">Welcome to PMDb Next!</h3>
					<Accordion className={styles.about_accordion}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Accordion Item #1</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Accordion Item #2</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
