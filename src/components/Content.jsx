function Content() {
  return (
    <div className="my-12 p-3 md:p-6 max-w-xl mx-auto border flex flex-col justify-between gap-6">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <div className="flex flex-col items-start gap-1">
          <div className="text-gray-600">Top text</div>
          <input type="text" className="shadow-sm border rounded-md p-2" placeholder="Shut up" />
        </div>
        <div className="flex flex-col items-start gap-1">
          <div className="text-gray-600">Bottom text</div>
          <input type="text" className="shadow-sm border rounded-md p-2" placeholder="Shut up" />
        </div>
      </div>
      <button className="p-2 rounded-md bg-gradient-to-r from-seance-900 to-seance-700 text-white">Get a new meme image 🖼</button>
      {/* <input type="submit" className="p-2 rounded-md bg-gradient-to-r from-seance-900 to-seance-700 text-white" /> */}
    </div>
  );
}

export default Content;
