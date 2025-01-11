import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Smith",
      designation: "Designation here",
      image: profile1,
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "Elina Williams",
      designation: "Designation here",
      image: profile2,
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "John Smith",
      designation: "Designation here",
      image: profile3,
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 mt-5">
      <h2 className="text-2xl font-semibold mb-4">Team</h2>

      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#E8F4FD] rounded-lg p-6 items-center flex flex-col md:flex-row gap-6"
          >
            <div className="flex flex-col items-center md:items-start">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover mb-2"
              />
              <h3 className="font-semibold text-center md:text-left">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm text-center md:text-left">
                {member.designation}
              </p>
            </div>
            <p className="text-gray-600 flex-1">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
