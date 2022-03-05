import { nanoid } from "nanoid";

const ROBOT_KEY = "robots";

export interface Robot {
  id: string;
  name: string;
  purpose: string;
}

/**
 * Gets all robots
 */
function getRobots(): Robot[] {
  const robots: Robot[] = JSON.parse(localStorage.getItem(ROBOT_KEY) || "[]");
  return robots;
}

/**
 * Get robot by id
 */
function getRobotById(robotId: string): Robot | undefined {
  const robots: Robot[] = getRobots();
  const robot = robots.find((r) => r.id === robotId);
  return robot;
}

/**
 * Creates robot
 */
function createRobot(name: string, purpose: string) {
  const robotId = nanoid();
  let robots = getRobots();
  // Check if id already exists
  if (robots.find((r) => r.id === robotId))
    throw new Error("id already exists");

  const newRobot = {
    id: robotId,
    name: name,
    purpose: purpose,
  };
  // Create
  robots = [...robots, newRobot];

  localStorage.setItem(ROBOT_KEY, JSON.stringify(robots));

  return newRobot;
}

/**
 * Updates robot
 */
function updateRobot(robotId: string, name: string, purpose: string) {
  let robots = getRobots();

  // Check if id already exists
  let robotIdx = robots.findIndex((r) => r.id === robotId);
  if (robotIdx < 0) throw new Error("Robot not found");

  // Create
  robots[robotIdx] = {
    ...robots[robotIdx],
    name: name,
    purpose: purpose,
  };

  localStorage.setItem(ROBOT_KEY, JSON.stringify(robots));

  return robots[robotIdx];
}

/**
 * Deletes robot by id
 */
function deleteRobotById(robotId: string) {
  const robots: Robot[] = getRobots();
  const filtered_robots = robots.filter((r) => r.id !== robotId);
  localStorage.setItem(ROBOT_KEY, JSON.stringify(filtered_robots));

  return filtered_robots;
}

export { getRobots, getRobotById, createRobot, updateRobot, deleteRobotById };
