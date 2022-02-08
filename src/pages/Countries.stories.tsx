import Countries from './Statistics';

export default {
  component: Countries,
  title: 'Pages/Countries',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <Countries />;
