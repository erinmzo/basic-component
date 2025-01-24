import { useParams } from "react-router-dom";
import Checkbox from "../components/feature/Checkbox";
import Dropdown from "../components/feature/Dropdown";
import RadioField from "../components/feature/RadioField";
import Toggle from "../components/feature/Toggle";
import Layout from "../components/layout/Layout";
import Hero from "../components/main/Hero";

function Feature() {
  const { feature } = useParams();

  const renderFeature = () => {
    switch (feature) {
      case "toggle":
        return <Toggle />;
      case "checkbox":
        return <Checkbox />;
      case "radio":
        return <RadioField />;
      case "dropdown":
        return <Dropdown />;
      default:
        return <Hero />;
    }
  };

  return <Layout params={feature}>{renderFeature()}</Layout>;
}

export default Feature;
