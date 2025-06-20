import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="w-full py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            About Us
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mt-4 text-blue-900">
            Your Smile, Our Priority
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            With over 15 years of experience, our dental clinic is committed to delivering top-notch, stress-free care for patients of all ages.
          </p>
        </div>

        {/* About Image + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl border border-blue-100">
            <Image
              src="/image/smile.jpg"
              alt="Our Dental Team"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-blue-800">
              A Modern Clinic with a Human Touch
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              At DentalHealth, we combine cutting-edge dental technology with a compassionate approach to ensure every visit is smooth, safe, and effective.
              {"Whether you're here for a routine check-up or a complex procedure, we take the time to understand your needs and ensure your comfort every step of the way."}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Our expert team covers all areas of dental care — from general dentistry and cosmetic treatments to surgical procedures and pediatric care.
            </p>
            <Button variant="default" className="w-fit bg-blue-600 hover:bg-blue-700">
              Book Your Visit
            </Button>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-28">
          <h3 className="text-2xl lg:text-3xl font-bold mb-12 text-center text-blue-900">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Experienced Doctors",
                desc: "A highly qualified team with over 15 years in dental practice.",
                icon: "🦷",
              },
              {
                title: "Modern Equipment",
                desc: "We use the latest dental technologies for accurate and comfortable treatments.",
                icon: "⚙️",
              },
              {
                title: "Personalized Care",
                desc: "Each treatment plan is tailored to meet your individual needs.",
                icon: "💡",
              },
              {
                title: "Friendly Environment",
                desc: "A stress-free, welcoming space for kids and adults alike.",
                icon: "😊",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition border border-blue-100"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-blue-800">{item.title}</h4>
                <p className="text-muted-foreground mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

         
      </div>
    </div>
  );
};

export default About;
