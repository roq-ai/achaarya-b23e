interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Teacher'],
  customerRoles: ['Guest'],
  tenantRoles: ['Teacher', 'Parent', 'Student'],
  tenantName: 'Provider',
  applicationName: 'Achaarya.',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read provider information',
    'Read textbook information',
    'Read chapter information',
  ],
  ownerAbilities: ['Manage textbooks', 'Manage chapters', 'Manage questions', 'Manage study sessions'],
  getQuoteUrl: 'https://app.roq.ai/proposal/33823c0b-1dc5-47ac-921d-55b35ea86809',
};
