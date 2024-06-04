import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
} from "@chakra-ui/react";

const MultiSelectMenu = (props) => {
    const { label, options, buttonProps, onChange } = props;
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
      <Menu closeOnSelect={false}>
        {() => (
          <>
            <MenuButton
              type="button"
              backgroundColor={selectedOptions.length ? "purple.200" : "white"}
              color={selectedOptions.length ? "purple.500" : "gray.600"}
              borderColor={selectedOptions.length ? "purple.200" : "gray.300"}
              borderWidth={1}
              p={2}
              px={4}
              borderRadius="25px"
              _focus={{
                            outline: "none"
                        }}
              {...buttonProps}
            >
              {`${label}${selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ""}`}
            </MenuButton>
            <MenuList maxHeight="240px" overflowY="auto">
              <MenuDivider />
              <MenuOptionGroup
                title={undefined}
                defaultValue={selectedOptions}
                type="checkbox"
                onChange={(values) => {
                                const filteredValues = values.filter(value => value.length);
                                setSelectedOptions(filteredValues);
                                onChange?.(filteredValues);
                            }}
              >
                {options.map((option) => (
                  <MenuItemOption
                    key={`multiselect-menu-${option}`}
                    type="button"
                    value={option}
                  >
                    {option}
                  </MenuItemOption>
                            ))}
              </MenuOptionGroup>
            </MenuList>
          </>
            )}
      </Menu>
    );
};

MultiSelectMenu.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func,
    // eslint-disable-next-line react/forbid-prop-types
    buttonProps: PropTypes.object
};

MultiSelectMenu.defaultProps = {
    onChange: null,
    buttonProps: {}
};

export default MultiSelectMenu;
