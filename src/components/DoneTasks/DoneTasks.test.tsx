import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import DoneTasks from "./DoneTasks";

describe("DoneTasks", () => {
  test("Удаляет задачи при клике на кнопку", () => {
    const tasksMock = [
      { id: "1", title: "Task 1", status: "completed" },
      { id: "2", title: "Task 2", status: "pending" },
      { id: "3", title: "Task 3", status: "completed" },
    ];
    const setTasksMock = vi.fn();

    render(<DoneTasks tasks={tasksMock} setTasks={setTasksMock} />);

    const iconButton = screen.getByTestId("delete_button");
    fireEvent.click(iconButton);

    expect(setTasksMock).toHaveBeenCalledTimes(1);
    expect(setTasksMock).toHaveBeenCalledWith(expect.any(Function));

    const filterFunction = setTasksMock.mock.calls[0][0];
    const newTasks = filterFunction(tasksMock);
    expect(newTasks).toEqual([{ id: "2", title: "Task 2", status: "pending" }]);
  });
});
