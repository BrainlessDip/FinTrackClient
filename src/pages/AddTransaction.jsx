import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)]">
        <h1 className="text-4xl border-b-2 border-blue-500">Add Transaction</h1>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <form>
            <label className="label">Email</label>
            <input
              type="text"
              className="input focus:outline-0"
              name="email"
              placeholder="Email"
              autoComplete="username"
              required
            />
            <button className="btn btn-neutral mt-4 w-full">
              Add Transaction
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default AddTransaction;
