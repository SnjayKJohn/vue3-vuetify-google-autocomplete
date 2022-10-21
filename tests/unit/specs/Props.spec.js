import { createLocalVue, mount } from 'vue-test-utils';
import Vuetify from 'vuetify';
import Vga from '@/index';

const localVue = createLocalVue();
let vuetify;
let mandatoryProps;

beforeEach(() => {
  vuetify = new Vuetify();
  localVue.use(vuetify);
  mandatoryProps = {
    id: 'hellowWorld',
  };
});

describe('Ensure component props behave as expected', () => {
  describe('addressComponents', () => {
    test('Should have default value if not provided', () => {
      const defaultAddressCompoentValue = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'short_name',
        administrative_area_level_2: 'short_name',
        country: 'long_name',
        postal_code: 'short_name',
      };
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.addressComponents).toEqual(defaultAddressCompoentValue);
    });

    test('Should accept Object input', () => {
      mandatoryProps.addressComponents = {
        street_number: 'short_name',
        route: 'long_name',
        locality: 'long_name',
        administrative_area_level_1: 'long_name',
        administrative_area_level_2: 'long_name',
        country: 'long_name',
        postal_code: 'short_name',
      };
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.addressComponents).toBe(mandatoryProps.addressComponents);
    });
  });

  // describe('append-icon', () => {
  //   test('Should have "undefined" as default if not provided', () => {
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.appendIcon).toBeUndefined();
  //   });

  //   test('Should accept string input', () => {
  //     mandatoryProps.appendIcon = 'search';
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.appendIcon).toBe('search');
  //   });
  // });

  // describe('append-outer-icon', () => {
  //   test('Should have "undefined" as default if not provided', () => {
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.appendOuterIcon).toBeUndefined();
  //   });

  //   test('Should accept string input', () => {
  //     mandatoryProps.appendOuterIcon = 'search';
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.appendOuterIcon).toBe('search');
  //   });
  // });

  describe('autofocus', () => {
    test('Should have false as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.autofocus).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.autofocus = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.autofocus).toBe(true);
    });
  });

  describe('selection-required', () => {
    test('Should have false as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.selectionRequired).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.selectionRequired = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.selectionRequired).toBe(true);
    });
  });

  describe('background-color', () => {
    test('Should have false as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.backgroundColor).toBe(undefined);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.backgroundColor = 'pink';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.backgroundColor).toBe('pink');
    });
  });

  describe('clearable', () => {
    test('Should have false as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.clearable).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.clearable = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.clearable).toBe(true);
    });
  });

  describe('color', () => {
    test('Should have "primary" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.color).toBe(undefined);
    });

    test('Should accept string input', () => {
      mandatoryProps.color = 'green';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.color).toBe('green');
    });
  });

  describe('counter', () => {
    test('Should have "primary" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.counter).toBeUndefined();
    });

    test('Should accept number input', () => {
      mandatoryProps.counter = 33;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.counter).toBe(33);
    });
  });

  describe('country', () => {
    test('Should have "null" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.country).toBeNull();
    });

    test('Should accept string input', () => {
      mandatoryProps.country = 'ZA';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.country).toBe('ZA');
    });

    test('Should accept array input', () => {
      mandatoryProps.country = ['ZA'];
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.country).toEqual(['ZA']);
    });
  });

  describe('dark', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.dark).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.dark = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.dark).toBe(true);
    });
  });

  describe('disabled', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.disabled).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.disabled = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.disabled).toBe(true);
    });
  });

  describe('enable-geolocation', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.enableGeolocation).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.enableGeolocation = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.enableGeolocation).toBe(true);
    });
  });

  describe('error', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.error).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.error = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.error).toBe(true);
    });
  });

  describe('error-messages', () => {
    test('Should have "[]" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.errorMessages).toEqual([]);
    });

    test('Should accept string input', () => {
      mandatoryProps.errorMessages = ['Hello World Error Message'];
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.errorMessages).toEqual(['Hello World Error Message']);
    });
  });

  describe('flat', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.flat).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.flat = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.flat).toBe(true);
    });
  });

  describe('full-width', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.fullWidth).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.fullWidth = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.fullWidth).toBe(true);
    });
  });

  describe('hide-details', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.hideDetails).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.hideDetails = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.hideDetails).toBe(true);
    });
  });

  describe('hint', () => {
    test('Should have "undefined" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.hint).toBeUndefined();
    });

    test('Should accept string input', () => {
      mandatoryProps.hint = 'A Hint';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.hint).toBe('A Hint');
    });
  });

  describe('id', () => {
    test('Should have "undefined" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: {},
      });
      expect(wrapper.vm.$props.id).toBeUndefined();
    });

    test('Should accept string input', () => {
      mandatoryProps.id = 'an-id-value';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.id).toBe('an-id-value');
    });
  });

  // describe('label', () => {
  //   test('Should have "undefined" as default if not provided', () => {
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.label).toBeUndefined();
  //   });

  //   test('Should accept string input', () => {
  //     mandatoryProps.label = 'A Label';
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.label).toBe('A Label');
  //   });
  // });

  describe('light', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.light).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.light = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.light).toBe(true);
    });
  });

  // describe('loading', () => {
  //   test('Should have "false" as default if not provided', () => {
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.loading).toBe(false);
  //   });

  //   test('Should accept string input', () => {
  //     mandatoryProps.loading = 'We are loading';
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.loading).toBe('We are loading');
  //   });

  //   test('Should accept boolean input', () => {
  //     mandatoryProps.loading = true;
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.loading).toBe(true);
  //   });
  // });

  describe('mask', () => {
    test('Should have "undefined" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.mask).toBeUndefined();
    });

    test('Should accept string input', () => {
      mandatoryProps.mask = '######';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.mask).toBe('######');
    });

    test('Should accept object input', () => {
      mandatoryProps.mask = {};
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.mask).toEqual({});
    });
  });

  describe('no-resize', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.noResize).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.noResize = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.noResize).toBe(true);
    });
  });

  describe('persistent-hint', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.persistentHint).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.persistentHint = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.persistentHint).toBe(true);
    });
  });

  describe('placeholder', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.placeholder).toBeUndefined();
    });

    test('Should accept string input', () => {
      mandatoryProps.placeholder = 'A Placeholder';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.placeholder).toBe('A Placeholder');
    });
  });

  describe('placeName', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.placeName).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.placeName = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.placeName).toBe(true);
    });
  });

  describe('prefix', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.prefix).toBeUndefined();
    });

    test('Should accept string input', () => {
      mandatoryProps.prefix = 'A Prefix';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.prefix).toBe('A Prefix');
    });
  });

  // describe('prepend-icon', () => {
  //   test('Should have "false" as default if not provided', () => {
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.prependIcon).toBeUndefined();
  //   });

  //   test('Should accept string input', () => {
  //     mandatoryProps.prependIcon = 'A Prefix';
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.prependIcon).toBe('A Prefix');
  //   });
  // });

  describe('readonly', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.readonly).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.readonly = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.readonly).toBe(true);
    });
  });

  describe('return-masked-value', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.returnMaskedValue).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.returnMaskedValue = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.returnMaskedValue).toBe(true);
    });
  });

  describe('rows', () => {
    test('Should have "5" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.rows).toBe(5);
    });

    test('Should accept number input', () => {
      mandatoryProps.rows = 10;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.rows).toBe(10);
    });

    test('Should accept string input', () => {
      mandatoryProps.rows = '1';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.rows).toBe('1');
    });
  });

  // describe('rules', () => {
  //   test('Should have "[]" as default if not provided', () => {
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.rules).toEqual([]);
  //   });

  //   test('Should accept boolean input', () => {
  //     const func = [() => {}];
  //     mandatoryProps.rules = func;
  //     const wrapper = mount(Vga, {
  //       localVue,
  //       vuetify,
  //       propsData: mandatoryProps,
  //     });
  //     expect(wrapper.vm.$props.rules).toEqual(func);
  //   });
  // });

  describe('single-line', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.singleLine).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.singleLine = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.singleLine).toBe(true);
    });
  });

  describe('solo', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.solo).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.solo = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.solo).toBe(true);
    });
  });

  describe('solo-inverted', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.soloInverted).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.soloInverted = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.soloInverted).toBe(true);
    });
  });

  describe('suffix', () => {
    test('Should have "undefined" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.suffix).toBeUndefined();
    });

    test('Should accept string input', () => {
      mandatoryProps.suffix = 'A Suffix';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.suffix).toBe('A Suffix');
    });
  });

  describe('textarea', () => {
    test('Should have "false" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.textarea).toBe(false);
    });

    test('Should accept boolean input', () => {
      mandatoryProps.textarea = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.textarea).toBe(true);
    });
  });

  describe('toggle-keys', () => {
    test('Should have "[13, 32]" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.toggleKeys).toEqual([13, 32]);
    });

    test('Should accept array input', () => {
      mandatoryProps.toggleKeys = ['Hellow'];
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.toggleKeys).toEqual(['Hellow']);
    });
  });

  describe('type', () => {
    test('Should have "text" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.type).toBe('text');
    });

    test('Should accept string input', () => {
      mandatoryProps.type = 'number';
      const wrapper = mount(Vga, {
        localVue,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.type).toBe('number');
    });
  });

  describe('types', () => {
    test('Should have "address" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.types).toBe('address');
    });

    test('Should accept string input', () => {
      mandatoryProps.types = 'postal';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.types).toBe('postal');
    });
  });

  describe('validate-on-blur', () => {
    test('Should have "address" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.validateOnBlur).toBe(false);
    });

    test('Should accept string input', () => {
      mandatoryProps.validateOnBlur = true;
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.validateOnBlur).toBe(true);
    });
  });

  describe('value', () => {
    test('Should have "undefined" as default if not provided', () => {
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.value).toBeUndefined();
    });

    test('Should accept string input', () => {
      mandatoryProps.value = 'Some Prepopulated, Address, Somewhere, Earth';
      const wrapper = mount(Vga, {
        localVue,
        vuetify,
        propsData: mandatoryProps,
      });
      expect(wrapper.vm.$props.value).toBe('Some Prepopulated, Address, Somewhere, Earth');
    });
  });
});
