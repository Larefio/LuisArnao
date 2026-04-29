"use strict";

// ==========================================================================
// Test system
// ==========================================================================
const testResults = [];
const recordTest = (testName, condition) => {
  const emoji = condition ? "✅" : "❌";
  testResults.push(`${emoji} ${testName}`);
};

// ==========================================================================
// Application state
// ==========================================================================
const friends = [
  {
    name: "Fernanda",
    age: 22,
    emoji: "👧",
    hobby: "Fotografía", 
    quote: "¡Cada día es una aventura!"
  },
  {
    name: "Mijael", 
    age: 21,
    emoji: "👦",
    hobby: "Gaming",
    quote: "¡El código es mi superpoder!"
  },
  {
    name: "Fe",
    age: 23, 
    emoji: "🌟",
    hobby: "Arte Digital",
    quote: "Creatividad sin límites 🎨"
  }
];

// ==========================================================================
// DOM Functions - TODO: Implementar estas funciones
// ==========================================================================
const createFriendCard = (friend) => {
  // TODO: Crear elemento div con createElement
  // TODO: Agregar clases CSS apropiadas con className
  // TODO: Usar innerHTML para el contenido HTML
  // TODO: Agregar event listener para click
  // TODO: Retornar elemento HTML completo
};

const showFriendDetails = (friendName) => {
  // TODO: Buscar amigo por nombre usando find()
  // TODO: Si existe, mostrar información completa con alert()
  // TODO: Si no existe, mostrar mensaje apropiado
  // TODO: Formatear información de manera clara
};

const addNewFriend = () => {
  // TODO: Usar prompt() para obtener nombre
  // TODO: Usar prompt() para obtener edad, hobby, emoji y quote
  // TODO: Validar que los datos no estén vacíos o null
  // TODO: Crear objeto friend y agregarlo al array
  // TODO: Re-renderizar la vista completa
};

const renderFriends = () => {
  // TODO: Obtener contenedor con querySelector
  // TODO: Limpiar contenido existente con innerHTML
  // TODO: Recorrer array de friends con forEach
  // TODO: Crear y agregar cada tarjeta al contenedor
};

const initializeApp = () => {
  // TODO: Configurar event listener para botón agregar
  // TODO: Renderizar amigos iniciales
  // TODO: Preparar aplicación para interacción completa
};

// ==========================================================================
// Tests automatizados
// ==========================================================================
const runTests = () => {
  // Test 1: Funcionalidad - Card creation works correctly
  try {
    const testFriend = friends[0];
    const card = createFriendCard(testFriend);
    const isValidElement = card instanceof HTMLElement;
    const containsName = card.innerHTML.includes(testFriend.name);
    const containsEmoji = card.innerHTML.includes(testFriend.emoji);
    
    recordTest("3.1.1 Card creation functionality works correctly", 
      isValidElement && containsName && containsEmoji);
  } catch (error) {
    recordTest("3.1.1 Card creation functionality works correctly", false);
  }

  // Test 2: Funcionalidad - Complete rendering system works
  try {
    const container = document.querySelector("#friendsContainer");
    const containerExists = container !== null;
    const renderFunctionExists = typeof renderFriends === "function";
    const initFunctionExists = typeof initializeApp === "function";
    
    recordTest("3.1.2 Complete rendering system works correctly", 
      containerExists && renderFunctionExists && initFunctionExists);
  } catch (error) {
    recordTest("3.1.2 Complete rendering system works correctly", false);
  }

  // Test 3: Funcionalidad - Add friend feature works
  try {
    const initialLength = friends.length;
    const addFunctionExists = typeof addNewFriend === "function";
    const buttonExists = document.querySelector("#addFriendBtn") !== null;
    const showDetailsExists = typeof showFriendDetails === "function";
    
    recordTest("3.1.3 Add friend functionality works correctly", 
      addFunctionExists && buttonExists && showDetailsExists);
  } catch (error) {
    recordTest("3.1.3 Add friend functionality works correctly", false);
  }

  // Test 4: Validaciones - System handles invalid inputs properly
  try {
    // Simulate checking for non-existent friend
    const originalAlert = window.alert;
    let alertCalled = false;
    window.alert = () => { alertCalled = true; };
    
    // Test array integrity and validation readiness
    const hasValidFriends = Array.isArray(friends) && friends.length >= 3;
    const allFriendsValid = friends.every(friend => 
      friend.name && friend.emoji && friend.hobby && friend.quote
    );
    
    window.alert = originalAlert;
    
    recordTest("3.1.4 System handles validation correctly", 
      hasValidFriends && allFriendsValid);
  } catch (error) {
    recordTest("3.1.4 System handles validation correctly", false);
  }

  // Test 5: Return types - Functions return correct data types
  try {
    const functionTypesCorrect = 
      typeof createFriendCard === "function" &&
      typeof showFriendDetails === "function" &&
      typeof addNewFriend === "function" &&
      typeof renderFriends === "function" &&
      typeof initializeApp === "function";
    
    let cardReturnsElement = false;
    if (typeof createFriendCard === "function") {
      try {
        const testCard = createFriendCard(friends[0]);
        cardReturnsElement = testCard instanceof HTMLElement;
      } catch (e) {
        cardReturnsElement = false;
      }
    }
    
    recordTest("3.1.5 Functions return correct types", 
      functionTypesCorrect && cardReturnsElement);
  } catch (error) {
    recordTest("3.1.5 Functions return correct types", false);
  }
};

// ==========================================================================
// App initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  
  // Run tests after brief delay
  setTimeout(() => {
    runTests();
    console.log('=== 🧪 Test Results Reto 3.1 ===');
    testResults.forEach(result => console.log(result));
  }, 500);
});