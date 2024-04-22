import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailSidebar from "./ActivityDetailSidebar";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";

export default observer(function ActivityDetails() {
    const { activityStore } = useStore();
    const { selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailHeader activity={activity} />
                <ActivityDetailInfo activity={activity} />
                <ActivityDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailSidebar />
            </Grid.Column>
        </Grid>
    );
});
