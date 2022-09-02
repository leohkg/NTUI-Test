<template>
    <button class="nt-button" :class="classes" :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
import { oneOf } from '../../utils/assist.js';
const prefixCls = 'nt-button';
export default {
    name: 'nt-button',
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'error']);
            },
            default: 'default',
        },
        size: {
            validator (value) {
                return oneOf(value, ['small', 'large', 'medium']);
            },
            default: 'medium',
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-${this.size}`]: this.size !== 'default',
                }
            ]
        },
    },
    methods: {
        handleClick (event) {
            this.$emit('click', event);
        }
    }
}
</script>