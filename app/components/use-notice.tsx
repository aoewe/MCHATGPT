import { showModal } from "./ui-lib";
import Nati from "../icons/nati.svg";
import styles from "./use-notice.scss";

export function showAnnouncement() {
  showModal({
    title: "通知公告",
    children: (
      <div className={styles["Notice"]}>
        {/* <div className={styles["Notice"]}>
          <Nati />
        </div>
        <div className={styles["code-txt"]}>
          二维码过期为5月30日,请扫描上方二维码加入微信群了解更多信息，验证密码将会在群通知随机更新
        </div> */}
        为了维护互联网安全和健康发展，我们郑重提示您：任何用户都不允许生产、发布、传播任任何违法、
        违规内容。一旦发现用户发布、输出、传播浸及国家法律法规禁止的浸及政治、色情、暴力、恐怖主义、
        谣言等相关内容，只要发现一起，将立即采取严苛割施，记录使用IP地址并永久封禁。同时，
        我们会配设有相关部门进行调查和报警处理，确保网络信息安全和秩序良好。我们呼喊广大用户自觉遵守国家法律法规和互联网管理相关规定，
        并感谢您对我们的支持和理解！期待与您共同建设绿色、健康、和谐的网络环境！
      </div>
    ),
    // onClose: () => {}
  });
}
