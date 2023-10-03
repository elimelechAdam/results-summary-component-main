function App() {
  return (
    <>
      <body className="">
        <div className=" min-h-screen flex justify-center items-center ">
          <div className="flex flex-col justify-center align-middle items-center p-4 rounded-3xl flex-wrap w-64 text-center text-white bg-gradient-to-br from-gradient-light-slate-blue to-gradient-light-royal-blue">
            <h3 className="text-md mb-6 mt-2 font-semibold text-slate-200">
              Your Result
            </h3>{" "}
            <div className=" -slate-blue w-32 h-32 rounded-full flex flex-col justify-center items-center bg-gradient-to-br from-gradient-light-slate-blue to-gradient-violet-blue">
              <h1 className="text-6xl font-semibold font-hanken">76</h1>{" "}
              <span className="text-slate-500 font-semibold">of 100</span>
            </div>
            <h3 className="text-2xl mt-6 font-semibold">Great</h3>
            <span className="text-sm mt-6">
              You scored higher than 65% of the people who have taken these
              tests.
            </span>
          </div>
          <div className="flex justify-center align-middle bg-slate-800">
            Summary Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72
            / 100 Continue
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
