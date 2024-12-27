

import PropTypes from "prop-types";

const Card = ({
  SkillName,
  SkillLevel,
  SkillLevelBgColor,
  SkillLevelTextColor,
  SkillLevelBorderColor,
  Icon,
}) => {
  return (
    <div className={`border ${SkillLevelBorderColor} hover:-translate-y-1 border-2 shadow-sm p-5 rounded-2xl`}>
      <div className="flex items-center justify-between gap-5">
      <h3 className="text-xl font-bold">{SkillName}</h3>
        {Icon && <Icon className="w-8 h-8 text-gray-950 " />}
      </div>
      <div
        className={`mt-2 py-1 px-3 rounded-lg ${SkillLevelBgColor} ${SkillLevelTextColor} ${SkillLevelBorderColor}`}
      >
        {SkillLevel}
      </div>
    </div>
  );
};

Card.propTypes = {
  SkillName: PropTypes.string.isRequired,
  SkillLevel: PropTypes.string.isRequired,
  SkillLevelBgColor: PropTypes.string,
  SkillLevelTextColor: PropTypes.string,
  SkillLevelBorderColor: PropTypes.string,
  Icon: PropTypes.elementType,
};

export default Card;














