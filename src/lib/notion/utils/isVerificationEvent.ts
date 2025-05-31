export function isVerificationEvent(body: any) {
  if ('verification_token' in body) {
    console.log('Webhook verification token received:', body['verification_token'])
    return true
  }

  return false
}
