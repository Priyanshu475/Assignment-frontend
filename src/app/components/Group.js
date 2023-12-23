import React from "react";
import Card from "./Card";

import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { priorityIcons, progressIcons } from "./Icons";
import Avatar from "./Avatar";

const Group = ({ tasks, name, width, users, grouping, ordering }) => {
  const userIds = tasks.map((task) => parseInt(task.userId.split("-")[1] - 1));
  const initial = name
    ? name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("")
    : "I";
  if (ordering === 0) tasks.sort((a, b) => b.priority - a.priority);
  if (ordering === 1) tasks.sort((a, b) => a.title.localeCompare(b.title));

  const user = users.find((user) => user.name === name) || {
    id: "usr-1",
    available: false,
  };
  const userId = parseInt(user.id.split("-")[1]) - 1;

  return (
    <div
      className="flex flex-col Group"
      style={{ width: `${width}%`, minWidth: "300px", flexGrow: 1 }}
    >
      <header className="flex gap-4 items-center Group__header">
        {grouping === 0 && progressIcons(name)}
        {grouping === 1 && (
          <Avatar initial={initial} id={userId} available={user.available} />
        )}
        {grouping === 2 && priorityIcons(name)}
        <span className="text-medium font-bold" style={{ color:"#373737" }}>{name}</span>
        <span className="text-gray-600 flex-grow">{tasks.length}</span>
        <AddIcon style={{height:"1em",width:"1em"}} className="text-gray-600 text-xs h-4 w-4" />
        <MoreHorizIcon style={{height:"1em",width:"1em"}} className="text-gray-600 text-xs h-4 w-4" />
      </header>
      {tasks.map((task, id) => {
        return (
          <Card
            grouping={grouping}
            key={id}
            user={users[userIds[id]]}
            data={task}
          />
        );
      })}
    </div>
  );
};

export default Group;
