import PropTypes from 'prop-types';
export default function Link({route}) {
  return (
    <li className='hover:text-white' >
        <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object
}
