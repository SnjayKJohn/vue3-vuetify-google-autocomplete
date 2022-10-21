import { createLocalVue, mount } from 'vue-test-utils';
import Vuetify from 'vuetify';
import Vga from '@/index';

const localVue = createLocalVue();
let vuetify;
let mandatoryProps;

beforeEach(() => {
  vuetify = new Vuetify();
  mandatoryProps = {
    id: 'hellowWorld',
  };
});

describe('Ensure component data properties behave as expected', () => {
  describe('autocomplete', () => {
    test('Should have "null" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.autocomplete).toBeNull();
    });
  });

  describe('autocompleteText', () => {
    test('Should have "" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.autocompleteText).toBe('');
    });
  });

  describe('geolocateSet', () => {
    test('Should have "" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.geolocateSet).toBe(false);
    });
  });

  describe('loadInterval', () => {
    test('Should have "null" as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.loadInterval).toBeNull();
    });
  });

  describe('vgaMapState', () => {
    test('Should have {"initMap": false} as default', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.vgaMapState).toEqual({ initMap: false });
    });
  });
});
