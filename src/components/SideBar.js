import React from "react";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TimelineIcon from '@material-ui/icons/Timeline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';


export default function SideBar(props) {

  return (
    <Drawer
        className={props.classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: props.classes.drawerPaper,
        }}
      >
        <div className={props.classes.drawerHeader}>
          <IconButton onClick={props.onDrawerClose}>
            {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="Status">
            <ListItemIcon>{<TimelineIcon />}</ListItemIcon>
            <ListItemText primary="Status" />
          </ListItem>
          <ListItem button key="Notifications">
            <ListItemIcon>{<NotificationsIcon/>}</ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button key="Sensors">
            <ListItemIcon>{<BubbleChartIcon/>}</ListItemIcon>
            <ListItemText primary="Sensors" />
          </ListItem>
        </List>
        <Divider />
        {/*<List>*/}
        {/*  {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
        {/*    <ListItem button key={text}>*/}
        {/*      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
        {/*      <ListItemText primary={text} />*/}
        {/*    </ListItem>*/}
        {/*  ))}*/}
        {/*</List>*/}
      </Drawer>
  )
}