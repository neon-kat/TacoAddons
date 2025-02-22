import settings from "../config";
register("chat", (event) => {
  if(!settings().uwuAddonsHidden) return;
  cancel(event);
}).setCriteria("UwUaddons »").setContains();
