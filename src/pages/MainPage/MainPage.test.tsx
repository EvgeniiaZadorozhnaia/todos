import { render, screen, fireEvent } from "@testing-library/react";
import MainPage from "./MainPage";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

describe("MainPage", () => {
  test("Добавляет задачу при вводе и нажатии Enter", () => {
    const setTasksMock = vi.fn();
    render(<MainPage tasks={[]} setTasks={setTasksMock} />);

    const input = screen.getByPlaceholderText("Чем займемся сегодня?");
    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(setTasksMock).toHaveBeenCalledTimes(1);
    expect(setTasksMock).toHaveBeenCalledWith([
      expect.objectContaining({ title: "Новая задача", status: "pending" }),
    ]);
  });

  test("Добавляет задачу при клике на иконку", () => {
    const setTasksMock = vi.fn();
    render(<MainPage tasks={[]} setTasks={setTasksMock} />);

    const input = screen.getByPlaceholderText("Чем займемся сегодня?");
    const iconButton = screen.getByText("+");

    fireEvent.change(input, { target: { value: "Кликнутая задача" } });
    fireEvent.click(iconButton);

    expect(setTasksMock).toHaveBeenCalledWith([
      expect.objectContaining({ title: "Кликнутая задача", status: "pending" }),
    ]);
  });

  test("Не создаёт пустую задачу", () => {
    const setTasksMock = vi.fn();
    render(<MainPage tasks={[]} setTasks={setTasksMock} />);

    const input = screen.getByPlaceholderText("Чем займемся сегодня?");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(setTasksMock).not.toHaveBeenCalled();
  });
});
