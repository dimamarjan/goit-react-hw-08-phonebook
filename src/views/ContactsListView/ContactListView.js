import {
  ContactListItem,
  ContactTextContainer,
} from "views/ContactsListView/ContactListView.style";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useButtonStyle } from "utils/styleHooks/buttonsHook";
import { useCardStyles } from "utils/styleHooks/cardHook";

export function ContactListView({ data, onDelete, isShowCardItem }) {
  const { id, name, number } = data;
  const { root, container, title } = useCardStyles();
  const { delButton } = useButtonStyle();

  return (
    <ContactListItem key={id}>
      <Card className={root} variant="outlined">
        <CardContent className={container}>
          <Typography className={title} color="textSecondary">
            {name}
          </Typography>
          <Typography className={title} color="textSecondary">
            {number}
          </Typography>
          <ContactTextContainer className="rorate-button">
            <Button
              id={id}
              onClick={onDelete}
              className={delButton}
              size="small"
              type="submit"
              variant="outlined"
            >
              DELETE
            </Button>
          </ContactTextContainer>
        </CardContent>
      </Card>
    </ContactListItem>
  );
}
