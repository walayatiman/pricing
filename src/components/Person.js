import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const access = 'Ux2bTpteNJ0hfZxCQ54t6GFj2flUd0LdEo7d78TbCa8';
const mask = [
	{
		id: 1,
		data: 'data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMjQ4LCAxMTcsIDU1LCAxKSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3AgaWQ9InN0b3AyIiBzdG9wLWNvbG9yPSJyZ2JhKDI1MSwgMTY4LCAzMSwgMSkiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgICAgICAgICAgICAgIDwvZGVmcz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9InVybCgjc3ctZ3JhZGllbnQpIiBkPSJNMjUuNywtMjguOEMzMy43LC0yMy45LDQwLjgsLTE2LjIsNDMuMywtNi45QzQ1LjgsMi4zLDQzLjYsMTMuMSwzNy40LDE5LjZDMzEuMywyNiwyMS4yLDI4LjIsMTEuOSwzMC43QzIuNiwzMy4zLC01LjgsMzYuMiwtMTIuNCwzMy45Qy0xOS4xLDMxLjYsLTIzLjksMjQuMSwtMjguMSwxNi40Qy0zMi4zLDguNywtMzUuOSwwLjksLTM0LjUsLTUuOUMtMzMsLTEyLjcsLTI2LjcsLTE4LjQsLTIwLjEsLTIzLjZDLTEzLjUsLTI4LjcsLTYuOCwtMzMuMSwxLC0zNC40QzguOSwtMzUuNiwxNy43LC0zMy43LDI1LjcsLTI4LjhaIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIHN0eWxlPSJ0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzOyIgc3Ryb2tlLXdpZHRoPSIwIj48L3BhdGg+CiAgICAgICAgICAgICAgPC9zdmc+',
	},
	{
		id: 2,
		data: 'data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMjQ4LCAxMTcsIDU1LCAxKSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3AgaWQ9InN0b3AyIiBzdG9wLWNvbG9yPSJyZ2JhKDI1MSwgMTY4LCAzMSwgMSkiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgICAgICAgICAgICAgIDwvZGVmcz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9InVybCgjc3ctZ3JhZGllbnQpIiBkPSJNMjYuOSwtMzIuNkMzNCwtMjYuMSwzOC40LC0xNi44LDM4LC04LjNDMzcuNSwwLjIsMzIuMyw3LjksMjcuNiwxNS44QzIyLjksMjMuNywxOC43LDMxLjgsMTEuNCwzN0M0LDQyLjIsLTYuNSw0NC41LC0xMy41LDQwLjVDLTIwLjYsMzYuNSwtMjQuMSwyNi4yLC0yNi43LDE3LjVDLTI5LjMsOC43LC0zMC45LDEuNSwtMjkuOSwtNS41Qy0yOC45LC0xMi41LC0yNS4zLC0xOS4yLC0xOS45LC0yNkMtMTQuNSwtMzIuOSwtNy4zLC0zOS44LDEuMywtNDEuM0M5LjksLTQyLjksMTkuOCwtMzkuMSwyNi45LC0zMi42WiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBzdHlsZT0idHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsiIHN0cm9rZS13aWR0aD0iMCI+PC9wYXRoPgogICAgICAgICAgICAgIDwvc3ZnPg==',
	},
	{
		id: 3,
		data: 'data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/LS0+CiAgICAgICAgICAgICAgPHN2ZyBpZD0ic3ctanMtYmxvYi1zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSI+CiAgICAgICAgICAgICAgICAgICAgPGRlZnM+IAogICAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InN3LWdyYWRpZW50IiB4MT0iMCIgeDI9IjEiIHkxPSIxIiB5Mj0iMCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBpZD0ic3RvcDEiIHN0b3AtY29sb3I9InJnYmEoMjQ4LCAxMTcsIDU1LCAxKSIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3AgaWQ9InN0b3AyIiBzdG9wLWNvbG9yPSJyZ2JhKDI1MSwgMTY4LCAzMSwgMSkiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgICAgICAgICAgICAgIDwvZGVmcz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9InVybCgjc3ctZ3JhZGllbnQpIiBkPSJNMjMuNiwtMjkuNkMyOSwtMjMuNiwzMC44LC0xNC42LDMyLjYsLTUuNkMzNC4zLDMuNCwzNiwxMi42LDMyLjMsMTguMkMyOC41LDIzLjcsMTkuMywyNS42LDExLDI3LjNDMi44LDI5LC00LjUsMzAuNiwtMTEsMjguOEMtMTcuNiwyNy4xLC0yMy40LDIyLC0yOSwxNS4zQy0zNC43LDguNiwtNDAsMC4zLC0zOS44LC04LjFDLTM5LjYsLTE2LjUsLTMzLjksLTI1LC0yNi4zLC0zMC43Qy0xOC43LC0zNi4zLC05LjQsLTM5LjEsLTAuMSwtMzguOUM5LjEsLTM4LjgsMTguMiwtMzUuNiwyMy42LC0yOS42WiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBzdHlsZT0idHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczsiIHN0cm9rZS13aWR0aD0iMCI+PC9wYXRoPgogICAgICAgICAgICAgIDwvc3ZnPg==',
	},
];

const Card = styled.div`
	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		mask-image: url(${random_item(mask).data});
		mask-repeat: no-repeat;

		@media (max-width: 475px) {
			width: 100px;
			height: 100px;
		}
	}
`;

function random_item(items) {
	return items[Math.floor(Math.random() * items.length)];
}

export const Person = (props) => {
	const [post, setPostArray] = useState([]);

	const handleFetchData = async () => {
		const response = await fetch(
			`https://api.unsplash.com/search/photos?page=1&query=portrait&client_id=${access}`
		);
		const data = await response.json();
		setPostArray(data);
	};
	useEffect(() => {
		handleFetchData();
	}, []);

	const rand = Math.floor(Math.random() * 10);

	if (post.results === undefined) {
		return <h3>...loading</h3>;
	} else {
		return (
			<Card>
				<img src={post.results[rand].urls.small} alt="Employee" />
				<section>
					<h3>{props.name}</h3>
					<span>{props.title}</span>
					<p>{props.desc}</p>
				</section>
			</Card>
		);
	}
};
