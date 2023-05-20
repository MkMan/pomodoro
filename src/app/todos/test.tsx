import { render, screen, within } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';

import { Todos } from './index';

describe('Todos', () => {
  const windowConfirmMock = vi.fn().mockReturnValue(true);

  const renderTodos = () => render(() => <Todos />);
  const user = userEvent.setup();

  const getOpenNewTodoFormButton = () =>
    screen.getByRole('button', {
      name: 'Create a todo',
    });
  const getNewTodoDescriptionField = () =>
    screen.getByRole('textbox', {
      name: 'New todo description',
    });
  const getCreateTodoButton = () =>
    screen.getByRole('button', { name: 'Create' });
  const getDeleteAllTodosButton = () =>
    screen.queryByRole('button', { name: 'delete all todos' });
  const getDeleteCompleteTodosButton = () =>
    screen.queryByRole('button', { name: 'remove completed todos' });
  const getAllTodos = () => screen.queryAllByTestId('todo-item');
  const getTodo = (name: string) => screen.getByRole('checkbox', { name });
  const getTodoDeleteButton = (todo: HTMLElement) =>
    within(todo).getByRole('button', { name: 'Delete' });
  const createATodo = async (todoDescription: string) => {
    await user.click(getOpenNewTodoFormButton());
    await user.type(getNewTodoDescriptionField(), todoDescription);
    await user.click(getCreateTodoButton());
  };

  beforeEach(() => {
    vi.spyOn(window, 'confirm').mockImplementation(windowConfirmMock);
  });

  it('should show/hide the delete todos button correctly', async () => {
    renderTodos();

    expect(getDeleteAllTodosButton()).not.toBeInTheDocument();

    await createATodo('Todo 1');
    await createATodo('Todo 2');

    expect(getAllTodos()).toHaveLength(2);

    // delete all todos
    expect(getDeleteAllTodosButton()).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- in the dom
    await user.click(getDeleteAllTodosButton()!);
    expect(windowConfirmMock).toHaveBeenCalledWith(
      'This will delete all todos. Are you sure?'
    );

    expect(getAllTodos()).toHaveLength(0);
  });

  it('should show/hide the delete completed todos button correctly', async () => {
    renderTodos();

    expect(getDeleteCompleteTodosButton()).not.toBeInTheDocument();

    await createATodo('Todo 1');
    await user.click(getTodo('Todo 1'));

    expect(getDeleteCompleteTodosButton()).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- in the dom
    await user.click(getDeleteCompleteTodosButton()!);

    expect(getAllTodos()).toHaveLength(0);
  });

  it('should delete individual todo items', async () => {
    renderTodos();

    await createATodo('Todo 1');
    await createATodo('Todo 2');
    expect(getAllTodos()).toHaveLength(2);

    const todos = getAllTodos();
    await user.click(getTodoDeleteButton(todos[0]));
    await user.click(getTodoDeleteButton(todos[1]));

    expect(getAllTodos()).toHaveLength(0);
  });
});
