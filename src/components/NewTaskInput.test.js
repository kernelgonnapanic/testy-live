import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTaskInput from "./NewTaskInput";

describe('NewTaskInput', () => {
 it('renders input to fill in a task', () => {
  render(<NewTaskInput onAddNewTask={() => {}} />);

  const input = screen.getByPlaceholderText("Wpisz treść zadania");

  expect(input).toBeInTheDocument();
 });

 it('calls onAddNewTask prop with new task contents', () => {
  const mockFn = jest.fn();
  render(<NewTaskInput onAddNewTask={mockFn} />);

  const newTask = "#projekt Zrób to w końcu wreszcie!!!";
  const input = screen.getByPlaceholderText("Wpisz treść zadania")
  userEvent.type(input, newTask);
  userEvent.click(screen.getByText("Dodaj zadanie"))

  expect(mockFn).toHaveBeenCalledWith(newTask);
 });

 it('renders error when the user attempts to add an empty task', () => {
  const mockFn = jest.fn();
  render(<NewTaskInput onAddNewTask={mockFn} />);

  const newTask = "";
  const input = screen.getByPlaceholderText("Wpisz treść zadania");
  userEvent.type(input, newTask);
  userEvent.click(screen.getByText("Dodaj zadanie"));

  const error = screen.getByText("Dodaj treść zadania.");
  expect(error).toBeInTheDocument();
 });
});