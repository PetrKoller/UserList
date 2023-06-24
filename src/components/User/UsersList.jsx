import Card from "../UI/Card";
import styles from "./UsersList.module.css";
const UsersList = (props) => {
	return (
		<Card className={styles.users}>
			<ul>
				{props.data.map((user, id) => (
					<li key={id}>
						{`${user.username} (${user.age} years old)`}
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UsersList;