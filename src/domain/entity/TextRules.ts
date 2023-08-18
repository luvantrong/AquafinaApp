import { Colors } from "@resources";
import { StyleProp, TextStyle } from "react-native";

export interface TEXT {
  bold: boolean;
  contentStyle?: StyleProp<TextStyle>;
  content: string;
}

export const text_1: TEXT[] = [
  {
    bold: true,
    contentStyle: {
      color: Colors.GREY_RULES,
      textDecorationLine: "underline",
      lineHeight: 17,
    },
    content: "Bước 1:",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      " Người chơi đến các địa điểm lắp đặt máy thu gom vỏ chai nhựa đã qua sử dụng của Aquafina (sau đây được gọi tắt là ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "“Trạm Tái Sinh”",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content: ") để tham gia vào chương trình ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 16 },
    content: "“Tái sinh chai nhựa – Nhận quà sống xanh”.",
  },
];

export const text_2: TEXT[] = [
  {
    bold: true,
    contentStyle: {
      color: Colors.GREY_RULES,
      textDecorationLine: "underline",
      lineHeight: 17,
    },
    content: "Bước 2:",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content: "	Người chơi nhấn vào nút ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "“Bắt đầu”",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      " trên màn hình LCD (hoặc màn hình điện tử, tùy từng Trạm Tái Sinh) để bắt đầu một lượt tham gia.",
  },
];

export const text_3: TEXT[] = [
  {
    bold: true,
    contentStyle: {
      color: Colors.GREY_RULES,
      textDecorationLine: "underline",
      lineHeight: 17,
    },
    content: "Bước 3:",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content: " Người chơi bỏ chai nhựa rỗng vào vị trí có ghi ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "“Nhận chai ở đây”",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content: " của máy tại Trạm Tái Sinh và chờ hệ thống xử lý.",
  },
];

export const text_4: TEXT[] = [
  {
    bold: true,
    contentStyle: {
      color: Colors.GREY_RULES,
      textDecorationLine: "underline",
      lineHeight: 17,
    },
    content: "Bước 4:",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      "	Sau khi hệ thống xử lý xong, màn hình LCD/điện tử sẽ trả về một mã QR. Người chơi sử dụng điện thoại để quét mã QR trên màn hình để dẫn vào website: ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: " http://aquafina.pepsishop.vn/.",
  },
];

export const text_5: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "• Nếu người chơi đã đăng ký tài khoản, thì khi quét mã QR để dẫn về website: ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: " http://aquafina.pepsishop.vn/.",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      " người chơi cần nhập số điện thoại để hệ thống ghi nhận điểm Aquafina của lượt tham gia mới.",
  },
];

export const text_6: TEXT[] = [
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "• Chai Aquafina:",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      " người chơi được ghi nhận 2 điểm Aquafina cho mỗi vỏ chai Aquafina.",
  },
];

export const text_7: TEXT[] = [
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "• Không phải chai Aquafina:",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content: " người chơi được ghi nhận 1 điểm Aquafina cho mỗi vỏ chai.",
  },
];

export const text_8: TEXT[] = [
  {
    bold: true,
    contentStyle: {
      color: Colors.GREY_RULES,
      textDecorationLine: "underline",
      lineHeight: 17,
    },
    content: "Bước 5:",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      "	 Mỗi tuần, căn cứ vào số lượng người chơi và điểm Aquafina mà người chơi tích lũy được, SPVB sẽ công bố bảng xếp hạng ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "400 người",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      " chơi có điểm Aquafina cao nhất (được hiển thị đầy đủ trên bảng xếp hạng tại website",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: " http://aquafina.pepsishop.vn/",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content: " và trên fanpage",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: " https://www.facebook.com/Aquafinavietnam)",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      " vào lúc 12h00’ giờ ngày thứ 7 hàng tuần (hoặc một thời gian khác theo quyết định của Công ty TNHH Nước giải khát Suntory PepsiCo Việt Nam - SPVB) trong thời gian diễn ra chương trình.",
  },
];

export const text_9: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "• Mỗi tuần SPVB sẽ công bố danh sách 400 người chơi có điểm Aquafina cao nhất và quà tặng trên fanpage Aquafina và trên website ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content:
      "http://aquafina.pepsishop.vn/  vào lúc 12h00’ giờ ngày thứ 7 hàng tuần trong thời gian diễn ra chương trình",
  },
  {
    bold: false,
    contentStyle: { lineHeight: 17 },
    content:
      " người chơi cần cung cấp thông tin cá nhân cho SPVB theo hướng dẫn trong vòng 7 ngày kể từ ngày đổi quà để được hướng dẫn nhận quà tặng. Việc người chơi cung cấp thông tin cá nhân cho SPVB theo mục đích này được hiểu là hành động cho phép SPVB thu thập và sử dụng thông tin cá nhân của người chơi theo mục địch đã nêu. Trong mọi trường hợp, việc người chơi gửi thông tin nhận quà sau thời gian quy định là không hợp lệ, và được xem là người chơi từ bỏ việc nhận quà.",
  },
];

export const text_10: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "• Quà tặng sẽ được vận chuyển đến địa chỉ mà người chơi đã cung cấp khi Bên thứ 3 – phụ trách việc vận chuyển quà cho SPVB  trong vòng 30 ngày kể từ ngày kết thúc chương trình. Trong trường hợp bất khả kháng như thiên tai, dịch bệnh, việc vận chuyển có thể bị ảnh hưởng và thời gian trao quà sẽ kéo dài hơn so với thời hạn đã cam kết nêu trên. SPVB sẽ không chịu trách nhiệm nếu thông tin nhận quà mà người chơi cung cấp không chính xác. Người chơi có trách nhiệm ký tên trên phiếu giao hàng, biên bản bàn giao quà tặng, vận đơn bưu điện hoặc một tài liệu có tên gọi khác nhằm xác định đã nhận quà từ chương trình.",
  },
];

export const text_11: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "• Mỗi cá nhân có quyền thắng nhiều hơn 1 giải trong thời gian diễn ra chương trình với điều kiện không thắng giải trong cùng 1 thời điểm.",
  },
];

export const text_12: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "SPVB có quyền cập nhật và thay đổi thể lệ chương trình này để phù hợp hơn với người chơi và thông báo công khai đến người chơi. Trong trường hợp có sự thay đổi về thể lệ cũng như thời gian tổ chức, SPVB sẽ thông báo trên trang fanpage của chương trình tại ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "https://www.facebook.com/Aquafinavietnam",
  },
];

export const text_13: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "Mọi thắc mắc liên quan đến chương trình, người chơi có thể nhắn tin vào hộp thư trang fan page của chương trình tại: ",
  },
  {
    bold: true,
    contentStyle: { lineHeight: 17 },
    content: "https://www.facebook.com/Aquafinavietnam ",
  },
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "hoặc gọi điện theo số tổng đài 19001220. SPVB chỉ chịu trách nhiệm giải quyết những khiếu nại, tranh chấp được gửi đến SPVB trong thời hạn từ lúc bắt đầu chương trình cho đến khi hoàn tất việc trao quà tặng cho người chơi quy đổi quà tặng hợp lệ theo quy định tại Điều 2.4 nêu trên. Trong mọi trường hợp, nếu có tranh chấp về việc thực chương trình (bao gồm nhưng không giới hạn việc xác định người chơi chiến thắng theo bảng xếp hạng tuần, quy đổi quà tặng hợp lệ), thì quyền quyết định cuối cùng sẽ thuộc về SPVB.",
  },
];

export const text_14: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "SPVB cam kết thực hiện đúng và hoàn toàn chịu trách nhiệm về chương trình trên theo các qui định của pháp luật hiện hành.",
  },
];

export const text_15: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "Phù hợp với qui định của pháp luật, SPVB có quyền chấm dứt hoặc huỷ chương trình này trong trường hợp bất khả kháng và sẽ thông báo công khai phù hợp với quy định pháp luật.",
  },
];

export const text_16: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "Nếu phát hiện có dấu hiệu gian lận, sử dụng công cụ, phần mềm hỗ trợ, tài khoản của người chơi sẽ bị khóa đến hết thời gian diễn ra chương trình, mọi quà tặng sẽ bị thu hồi.",
  },
];

export const text_17: TEXT[] = [
  {
    bold: false,
    contentStyle: {
      color: Colors.GREY_RULES,
      lineHeight: 17,
    },
    content:
      "Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi hoặc truy cập Nền tảng, người chơi xác nhận và đồng ý rằng người chơi chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính sách bảo mật này, và theo đây bạn đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn cho mục đích thương mại.",
  },
];
