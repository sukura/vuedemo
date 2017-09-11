export function changeState(value) {
    switch (value) {
        case 'toReview':
            return '待审核';
        case 'approved':
            return '已通过';
        case 'disapproved':
            return '已驳回';
        case 'deleted':
            return '已删除';
        case 'toSend':
            return '待发送';
        case 'sending':
            return '发送中';
        case 'sent':
            return '已发送';
        case 'sendSuccessfully':
            return '发送成功';
        case 'sendFailed':
            return '发送失败';
        case 'normal':
            return '正常';
        case 'frozen':
            return '冻结';
        case 'online':
            return '已上线';
        case 'offline':
            return '已下线';
        case 'msgTemplate':
            return '短信模板';
        case 'massMsg':
            return '群发短信';
        case 'voiceCode':
            return '语音验证码';
        case 'voiceCall':
            return '语音通话';
        default:
            return '全部';
    }
}

export function rechargeType(value) {
    switch (value) {
        case 'online':
            return '线上充值';
        case 'offline':
            return '线下付费';
        default:
            return '全部';
    }
}

export function openOrClose(value) {
    switch (value) {
        case 'open':
            return '已开启';
        case 'close':
            return '已关闭';
        default:
            return '全部';
    }
}