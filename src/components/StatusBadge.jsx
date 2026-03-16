export default function StatusBadge({ status = "active", children }) {
  const styles = {
    active: {
      background: "#e6f9f0",
      color: "#0f766e",
    },
    pending: {
      background: "#fff7ed",
      color: "#c2410c",
    },
    inactive: {
      background: "#f1f5f9",
      color: "#475569",
    },
    error: {
      background: "#fee2e2",
      color: "#b91c1c",
    },
    success: {
      background: "#dcfce7",
      color: "#15803d",
    },
  };

  const style = styles[status] || styles.active;

  return (
    <span
      style={{
        background: style.background,
        color: style.color,
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 500,
        display: "inline-block",
        lineHeight: "1.2",
        textTransform: "capitalize",
        letterSpacing: "0.3px",
      }}
    >
      {children || status}
    </span>
  );
}
