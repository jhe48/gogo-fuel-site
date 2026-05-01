export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-6xl font-bold mb-4">Bethpage CITGO</h1>
        <p className="text-xl text-gray-300">Premium Fuel. Fresh Coffee. Favorite Snacks.</p>  
      </section>

      {/* Services Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-red-600 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Premium Fuel</h3>
            <p>Regular, Plus, Premium, and High-Speed Diesel available.</p>
          </div>

          <div className="p-6 bg-blue-600 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Convenience</h3>
            <p>Ice cold beverages, premium snacks, and auto supplies.</p>
          </div>

          <div className="p-5 bg-gray-800 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Air & Water</h3>
            <p>High Pressure tire inflation and water station on site.</p>
          </div>

          <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">NYS Lottery</h3>
            <p>Scratch-offs and live terminal tickets (Coming Soon).</p>
          </div>

        </div>
      </section>
    </main>
  );
}