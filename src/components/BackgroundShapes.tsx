@keyframes spotlight {
  0%   { transform: translate(-40%, -35%) rotate(0deg); }
  50%  { transform: translate(20%, 20%) rotate(180deg); }
  100% { transform: translate(-40%, -35%) rotate(360deg); }
}

.animate-spotlight {
  animation: spotlight 25s ease-in-out infinite;
}

/* Background golden spotlight */
.spotlight-glow {
  background: radial-gradient(circle, rgba(255, 215, 0, 0.25), transparent 70%);
}
