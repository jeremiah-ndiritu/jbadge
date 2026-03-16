export default function RoleBadge({ role = "user" }) {
  const colors = {
    admin: {
      bg: "#e0f2ff",
      color: "#0369a1",
    },
    official: {
      bg: "#e9f5ff",
      color: "#1d4ed8",
    },
    user: {
      bg: "#f0f9ff",
      color: "#0284c7",
    },
  };

  const style = colors[role] || colors.user;

  return (
    <span
      style={{
        background: style.bg,
        color: style.color,
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 500,
        display: "inline-block",
      }}
    >
      {role}
    </span>
  );
}
