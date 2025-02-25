import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";
import PendingTasks from "./PendingTasks";

describe("PendingTasks", () => {
  test("Обновляет статус задачи при установке чекбокса", () => {
    const tasksMock = [
      { id: "1", title: "Task 1", status: "pending" },
      { id: "2", title: "Task 2", status: "pending" },
      { id: "3", title: "Task 3", status: "completed" },
    ];
    const setTasksMock = vi.fn();

    render(<PendingTasks tasks={tasksMock} setTasks={setTasksMock} />);

    const firstCheckbox = screen.getByLabelText("Task 1");

    fireEvent.click(firstCheckbox);

    expect(setTasksMock).toHaveBeenCalledTimes(1);
    expect(setTasksMock).toHaveBeenCalledWith(expect.any(Function));

    const updateFunction = setTasksMock.mock.calls[0][0];
    const updatedTasks = updateFunction(tasksMock);

    expect(updatedTasks).toEqual([
      { id: "1", title: "Task 1", status: "completed" },
      { id: "2", title: "Task 2", status: "pending" },
      { id: "3", title: "Task 3", status: "completed" },
    ]);
  });
});
