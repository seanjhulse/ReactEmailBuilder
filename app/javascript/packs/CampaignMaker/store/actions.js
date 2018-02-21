// ------------ DATA LOADER ----------- //
export const LOAD_CAMPAIGN = 'LOAD_CAMPAIGN'
export const LOAD_LETTER  = 'LOAD_LETTER'
export const LOAD_SUBSCRIBERS = 'LOAD_SUBSCRIBERS'

// loads data into the campaign editor
export function loadCampaign(campaign) {
  return { type: LOAD_CAMPAIGN, campaign }
}
// loads letters into campaign editor (for drop down)
export function loadLetter(letter) {
  return { type: LOAD_LETTER, letter }
}
// loads subscriber lists
export function loadSubscribers(subscribers) {
  return { type: LOAD_SUBSCRIBERS, subscribers }
}



// ------------ DATA MUTATORS ----------- //
export const MUTATE_SUBSCRIBER_ID = 'MUTATE_SUBSCRIBER_ID'
export const MUTATE_FROM_ADDRESS  = 'MUTATE_FROM_ADDRESS'
export const MUTATE_SUBJECT       = 'MUTATE_SUBJECT'
export const MUTATE_CAMPAIGN_NAME = 'MUTATE_CAMPAIGN_NAME'

export function mutateSubscriberId(id) {
  return { type: MUTATE_SUBSCRIBER_ID, id }
}

export function mutateFromAddress(address) {
  return { type: MUTATE_FROM_ADDRESS, address }
}

export function mutateSubject(subject) {
  return { type: MUTATE_SUBJECT, subject }
}

export function mutateCampaignName(name) {
  return { type: MUTATE_CAMPAIGN_NAME, name }
}


// ------------- SAVE ------------------- //
export const SAVE = 'SAVE'

export function save() {
  return { type: SAVE }
}

export const SEND = 'SEND'

// !!!!!!!! THIS SENDS THE EMAIL !!!!!!!
export function send() {
  return { type: SEND }
}