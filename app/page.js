"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

// ⚠ 自分の Supabase プロジェクト情報を入れてね
const supabase = createClient(
  "YOUR_PROJECT_URL",
  "YOUR_ANON_PUBLIC_KEY"
);

export default function Home() {
  const [message, setMessage] = useState("");

  const detonate = async () => {
    const confirm1 = confirm(
      "⚠ 本当に爆破しますか？\nこの操作は元に戻せません。"
    );
    if (!confirm1) return;

    const confirm2 = confirm(
      "最終確認：Supabaseのデータを全て削除します。よろしいですか？"
    );
    if (!confirm2) return;

    // posts テーブルの全データ削除
    const { error } = await supabase
      .from("posts")
      .delete()
      .neq("id", 0);

    if (error) {
      setMessage("爆破失敗: " + error.message);
    } else {
      setMessage("💥 爆破完了！データは消滅しました。");
    }
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>DATA PURGE SYSTEM</h1>

      <button style={styles.button} onClick={detonate}>
        ☢ 爆破
      </button>

      <p style={styles.message}>{message}</p>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "40px",
    letterSpacing: "4px",
  },
  button: {
    fontSize: "2rem",
    padding: "30px 60px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    boxShadow: "0 0 40px red",
    transition: "0.3s",
  },
  message: {
    marginTop: "40px",
    fontSize: "1.2rem",
    color: "#ff4444",
  },
};
