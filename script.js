import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-database.js";

// Firebase 설정 적용
const firebaseConfig = {
    apiKey: "AIzaSyCcPIYzj6xpPmf8O-9_h68dQesvmrxAg-A",
    authDomain: "vibe-coding-todo-6d7d4.firebaseapp.com",
    databaseURL: "https://vibe-coding-todo-6d7d4-default-rtdb.firebaseio.com",
    projectId: "vibe-coding-todo-6d7d4",
    storageBucket: "vibe-coding-todo-6d7d4.firebasestorage.app",
    messagingSenderId: "673675195392",
    appId: "1:673675195392:web:7b86c134e8181d04ab54e5"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const todoRef = ref(database, 'todos');

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// 할일 추가 함수
const addTodo = () => {
    const text = todoInput.value.trim();
    if (text === '') return;

    // Firebase에 데이터 추가
    push(todoRef, {
        text: text,
        completed: false,
        timestamp: Date.now()
    });

    todoInput.value = '';
    todoInput.focus();
};

// UI에 할일 항목 생성 함수
const createTodoElement = (id, data) => {
    const li = document.createElement('li');
    li.setAttribute('data-id', id);
    if (data.completed) li.classList.add('completed');

    li.innerHTML = `
        <span class="todo-text">${data.text}</span>
        <div class="actions">
            <button class="edit-btn">수정</button>
            <button class="delete-btn">삭제</button>
        </div>
    `;

    // 삭제 버튼 이벤트
    li.querySelector('.delete-btn').addEventListener('click', () => {
        remove(ref(database, `todos/${id}`));
    });

    // 수정 버튼 이벤트
    li.querySelector('.edit-btn').addEventListener('click', () => {
        const newText = prompt('할일을 수정하세요:', data.text);
        if (newText !== null && newText.trim() !== '') {
            update(ref(database, `todos/${id}`), {
                text: newText.trim()
            });
        }
    });

    // 완료 체크 이벤트
    li.querySelector('.todo-text').addEventListener('click', () => {
        update(ref(database, `todos/${id}`), {
            completed: !data.completed
        });
    });

    return li;
};

// 데이터베이스 변경 감지 및 UI 업데이트
onValue(todoRef, (snapshot) => {
    todoList.innerHTML = '';
    const data = snapshot.val();
    console.log("Firebase Data:", data); // 데이터 확인용 로그
    
    if (data) {
        // 객체를 배열로 변환
        const todoEntries = Object.entries(data);
        
        // 타임스탬프 순으로 정렬 (타임스탬프가 없는 경우 대비)
        todoEntries.sort((a, b) => {
            const timeA = a[1].timestamp || 0;
            const timeB = b[1].timestamp || 0;
            return timeA - timeB;
        });
        
        todoEntries.forEach(([id, todoData]) => {
            const todoElement = createTodoElement(id, todoData);
            todoList.appendChild(todoElement);
        });
    }
}, (error) => {
    console.error("Firebase Read Error:", error);
});

// 추가 버튼 클릭 이벤트
addBtn.addEventListener('click', addTodo);

// 엔터 키 입력 이벤트
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
