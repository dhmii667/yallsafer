export default function Testimonials() {
    return (
      <section className="bg-[#0B1628] text-white py-24 px-6">
  
        <div className="max-w-6xl mx-auto">
  
          <h2 className="text-4xl font-bold text-center mb-16">
            آراء العملاء
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            <div className="bg-[#111827] p-8 rounded-3xl">
              <p className="text-gray-300 mb-6">
                تجربة ممتازة جدًا وتنظيم احترافي طوال الرحلة.
              </p>
  
              <h3 className="font-bold text-yellow-400">
                خالد الشمري
              </h3>
            </div>
  
            <div className="bg-[#111827] p-8 rounded-3xl">
              <p className="text-gray-300 mb-6">
                أفضل شركة تعاملت معها في رحلات آسيا.
              </p>
  
              <h3 className="font-bold text-yellow-400">
                نواف الحربي
              </h3>
            </div>
  
            <div className="bg-[#111827] p-8 rounded-3xl">
              <p className="text-gray-300 mb-6">
                الفنادق والأنشطة كانت فوق التوقعات.
              </p>
  
              <h3 className="font-bold text-yellow-400">
                فيصل العنزي
              </h3>
            </div>
  
          </div>
        </div>
      </section>
    );
  }