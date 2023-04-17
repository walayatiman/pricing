import React from 'react';
import {
	Container,
	Section,
	TableContainer,
	Tooltipbox,
	Tooltiptext,
} from './style';

import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Button } from '../../../components/Button';

export const Breakdown = () => {
	return (
		<Section>
			<Container>
				<h2>Let's Break it down.</h2>
				<TableContainer>
					<table>
						<tbody>
							<tr>
								<td>
									<h4>Features</h4>
								</td>
								<td>
									<h4>Starter</h4>
								</td>
								<td>
									<h4>Premier</h4>
								</td>
							</tr>
							<tr>
								<td>
									<Tooltiptext>Email integration</Tooltiptext>
									<Tooltipbox>
										<p>
											Remember the Soviet Union? They decided to quit after
											watching a DeltaForce
										</p>
									</Tooltipbox>
								</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Unlimited projects &amp; clients</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Invoicing &amp; payment plans</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Form &amp; email templates</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Client portals</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Calendar connection</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Active lead capture forms</td>
								<td>1</td>
								<td>Unlimited</td>
							</tr>
							<tr>
								<td>Bookkeeping integration</td>
								<td></td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Scheduling</td>
								<td></td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Automated workflows</td>
								<td></td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Public proposals</td>
								<td></td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
							<tr>
								<td>Zapier integration</td>
								<td></td>
								<td>
									<BsFillCheckCircleFill />
								</td>
							</tr>
						</tbody>
					</table>
				</TableContainer>
				<Button color="green" url="contact">
					Explore all features
				</Button>
			</Container>
		</Section>
	);
};
