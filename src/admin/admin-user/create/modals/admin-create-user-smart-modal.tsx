import {
  ReactiveModal,
  ReactiveModalProps
} from "src/common/components/molecules";

/** Put this piece outside of React component is a kind of natif memoized technique */
const components = {
  loading: (param: any) => <span />
};

type ModalKeys = keyof typeof components;

const AdminCreateUserSmartModal = <T extends ModalKeys>(
  props: ReactiveModalProps<T, typeof components>
) => <ReactiveModal {...props} components={components} />;

export default AdminCreateUserSmartModal;
