<template>
    <div>
        <!-- 삭제 버튼, 수정버튼 -->
        <div v-if="selectedItems.length > 0">
            <v-btn @click="deleteSelectedItems">선택된 항목 삭제</v-btn>
        </div>
        <!-- 테이블 영역, 체크박스 포함할것 -->
        <table>
            <thead>
                <tr>
                <th>
                    <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
                </th>
                <th>항목</th>
                <th>액션</th>
                </tr>
            </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td>
                    <input type="checkbox" v-model="selectedItems" :value="item" />
                </td>
                <td>{{ item }}</td>
                <td>
                    <v-btn @click="deleteItem(item)">삭제</v-btn>
                </td>
            </tr>
        </tbody>
        </table>
        <!-- 등록 버튼 영역, 추가할 데이터 입력란 포함 -->
        <div>
            <input v-model="newItem" type="text" placeholder="새 항목 입력" />
            <button @click="addItem">등록</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            newItem: '',
            selectedItems: [],
            selectAll: false,
            domain: process.env.VUE_APP_DEV_URL
        }
    },
    methods: {

        deleteSelectedItems() {

        },
        toggleSelectAll() {

        },
        deleteItem(item) {
            this.$axios.delete(`${this.domain}/api/v1/code/${item.code}`, {
                header: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log(res)
                this.getTableItems()
            })
            .catch((err) => {
                console.log(err)
            })
        },
        addItem() {
            let params = {
                code: this.newItem
            }
            this.$axios.post(`${this.domain}/api/v1/code`, params, {
                header: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log(res)
                this.getTableItems()
            })
            .catch((err) => {
                console.log(err)
            })
            this.newItem = ''
        },
        getTableItems() {
            this.$axios.get(`${this.domain}/api/v1/codes`, {
                header: {
                    'Content-Type': 'application/json'
                }
            })
            .then((res) => {
                console.log(res)
                this.items = res.data
            })
            .catch((err) => {
                console.log(err)
            })
        }

    },
    mounted() {
        this.getTableItems()
    }

}
</script>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table th,
    table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    input[type="text"] {
        padding: 5px;
        margin-right: 10px;
    }
</style>