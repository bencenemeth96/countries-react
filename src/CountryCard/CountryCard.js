import Flex from "../UI/Flex";

const CountryCard = ({ country, onClick }) => {
  return (
    <Flex column onClick={onClick}>
      <Flex>{country.name}</Flex>
      <Flex>{country.capital}</Flex>
    </Flex>
  );
};

export default CountryCard;
