import keychord from '@keychord/vite-plugin';
import dts from 'vite-plugin-dts';

export default {
  plugins: [keychord(), dts()]
};
