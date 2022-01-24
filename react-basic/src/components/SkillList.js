import PropTypes from 'prop-types'; // ES6

const SkillList = ({title}) => {
    return (
        <li>{title}</li>
    );
}

SkillList.propTypes = {
    title:PropTypes.string.isRequired,
}

export default SkillList