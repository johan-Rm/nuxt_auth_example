<template>
  <section class="section">
    <div class="container">
        <no-ssr>
            <paypal-checkout
            env="sandbox"
            amount="10"
            currency="EUR"
            locale="fr_FR"
            :client="paypal"
            :invoice-number="'201705051001'">
            </paypal-checkout>
        </no-ssr>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
        paypal: {
          sandbox: 'AWUvW-FGUBAhHVBMqkOgfgzOrmtxvwBt6-UAaLdudaHt0UyP3xup7DB-H7-xJk94jDk4CeOB6rVnADXH',
          production: 'AXKGDxDzaPX28wBLFdiNoG8yV_zB64raguVkZsiGQ9VT4mNSB4FJtuvxCtliKBAoJaZVcXE07YOL4gj6'
        }
    }
  }
}
</script>