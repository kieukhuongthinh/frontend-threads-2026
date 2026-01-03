import { useLocalStorage } from 'usehooks-ts';

import { SETTINGS_KEYS } from './keys';

export function useSettings() {
  const [enableSettingOne, setEnableSettingOne] = useLocalStorage<boolean>(
    SETTINGS_KEYS['enable-setting-one'],
    false,
  );

  return {
    enableSettingOne,
    setEnableSettingOne,
  };
}
