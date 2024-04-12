import { FormEvent, useState } from "react";
import "./App.css";

function App() {
  interface todoObj {
    id: string;
    task: string;
  }
  const [input, setInput] = useState({} as todoObj);
  const [list, setList] = useState<todoObj[]>([]);
  console.log(input);
  console.log(list);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    setList((prev) => [...prev, input]);

    setInput({ id: "", task: "" });
  };

  return (
    <div className="flex w-full">
      {list ? (
        <div className="flex flex-col gap-10 mx-auto bg-green-300 px-3 py-4 mt-5 rounded-md shadow-md">
          <div className="mx-auto font-bold text-xl">
            <h1>ToDo App</h1>
          </div>
          <div>
            <div className="flex gap-3">
              <input
                type="text"
                className="border-black border-2 rounded-md"
                placeholder="Type Id here"
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={input.id}
                name="id"
              />
              <input
                type="text"
                className="border-black border-2 rounded-md"
                placeholder="Type Task here"
                onChange={(e) =>
                  setInput((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={input.task}
                name="task"
              />
              <button
                onClick={handleClick}
                className="px-2 py-1 bg-green-600 rounded-md shadow-lg font-semibold"
              >
                Enter
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <ul className="flex flex-col gap-2">
                {list.map((data: todoObj, index) => (
                  <li key={index} className="flex justify-between gap-2">
                    <span>{data.id}</span>
                    <h1>{data.task}</h1>
                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setList((prev) =>
                            prev.filter((_, ind) => ind !== index)
                          )
                        }
                        className="px-2 bg-red-600 rounded-md shadow-lg font-semibold"
                      >
                        dele
                      </button>
                      <button className="px-2 bg-yellow-600 rounded-md shadow-lg font-semibold">
                        edit
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div>There is no Todo's</div>
      )}
    </div>
  );
}

export default App;
