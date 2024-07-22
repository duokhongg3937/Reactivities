import { Grid, Icon, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { observer } from "mobx-react-lite";
import { format } from "date-fns";

interface Props {
	activity: Activity;
}

export default observer(function ActivityDetailInfo({ activity }: Props) {
	return (
		<Segment.Group>
			<Segment attached="top">
				<Grid>
					<Grid.Column width={1}>
						<Icon size="large" color="teal" name="info" />
					</Grid.Column>
					<Grid.Column width={15}>
						<p>{activity.description}</p>
					</Grid.Column>
				</Grid>
			</Segment>
			<Segment attached>
				<Grid verticalAlign="middle">
					<Grid.Column width={1}>
						<Icon size="large" color="teal" name="calendar" />
					</Grid.Column>
					<Grid.Column width={15}>
						<span>{format(activity.date!, "dd MMM yyyy h:mm aa")}</span>
					</Grid.Column>
				</Grid>
			</Segment>
			<Segment attached>
				<Grid verticalAlign="middle">
					<Grid.Column width={1}>
						<Icon size="large" color="teal" name="marker" />
					</Grid.Column>
					<Grid.Column width={15}>
						<span>
							{activity.venue}, {activity.city}
						</span>
					</Grid.Column>
				</Grid>
			</Segment>
		</Segment.Group>
	);
});
