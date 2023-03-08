import React from 'react'

const NormalFetch = () => {
	return (
    <>
      <h1 className="mb-40">Normal</h1>
      <div className="flex gap-40">
        <div className="flex flex-col gap-8 items-center">
          <h1>Try and fetch some pokemon data!</h1>
          <button className="w-40">Fetch</button>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h1>Or fetch specific pokemon</h1>
          <div className="flex gap-8">
            <input type="text" className="border border-gray-300 rounded-lg py-2 px-4" />
            <button>Fetch</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NormalFetch