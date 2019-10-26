<template>
    <div data-app>
        <v-menu open-on-hover top offset-y>
            <template v-slot:activator="{on}">
                <span v-on="on">{{cardName}}</span>
            </template>
            <v-card class="mx-auto" max-width="200" outlined>
                <v-img :src="imgSrc"></v-img>
            </v-card>
        </v-menu>
    </div>
</template>
<script>
export default {
    props: ["cardName"],
    data: function() {
        return {
            imgSrc:
                "https://cdn.keyforgegame.com/media/card_front/en/341_001_7C854VPW72RH_en.png"
        };
    }
};
</script>